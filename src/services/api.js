import { BUS_DATABASE } from "../data/bus_db.js";

// Helper to calculate arrival time based on Departure + Duration
const calculateArrival = (dep, durationStr) => {
  const [depH, depM] = dep.split(':').map(Number);
  const durMatch = durationStr.match(/(\d+)h\s*(\d+)m/);
  
  if (!durMatch) return '00:00';
  
  const durH = parseInt(durMatch[1]);
  const durM = parseInt(durMatch[2]);
  
  let arrH = depH + durH;
  let arrM = depM + durM;
  if (arrM >= 60) {
    arrH += 1;
    arrM -= 60;
  }
  arrH = arrH % 24;
  
  return `${arrH.toString().padStart(2, '0')}:${arrM.toString().padStart(2, '0')}`;
};

const OPERATORS = ['TNSTC', 'SETC', 'KPN Travels', 'Parveen Travels', 'SRM Transports', 'YBM Travels', 'KSRTC', 'RKT Tours', 'Hebron'];
const TYPES = ['Non-AC Seater', 'Ultra Deluxe', 'AC Sleeper', 'Volvo AC', 'Non-AC Sleeper'];

export const fetchBusSchedules = async (
  origin,
  destination,
  date
) => {
  // Simulate network delay for realism (as if hitting a real backend)
  await new Promise(resolve => setTimeout(resolve, 600));

  const normOrigin = origin.trim().toLowerCase();
  const normDest = destination.trim().toLowerCase();
  
  let results = [];

  // 1. Query the separate Database file
  // Logic: Partial matching to allow "Chennai" to match "Chennai CMBT" or "Chennai Egmore"
  const dbMatches = BUS_DATABASE.filter(b => {
      const dbOrg = b.origin.toLowerCase();
      const dbDst = b.destination.toLowerCase();
      
      const originMatch = dbOrg.includes(normOrigin) || normOrigin.includes(dbOrg);
      const destMatch = dbDst.includes(normDest) || normDest.includes(dbDst);
      
      return originMatch && destMatch;
  });

  if (dbMatches.length > 0) {
    results = dbMatches.map((match, idx) => ({
      id: match.tripCode ? `db-${match.tripCode}` : `db-idx-${idx}`,
      tripCode: match.tripCode,
      operator: match.operator,
      busType: match.type,
      departureTime: match.dep,
      arrivalTime: calculateArrival(match.dep, match.dur),
      duration: match.dur,
      price: match.price, // Kept in data model but hidden in UI
      availableSeats: Math.floor(Math.random() * 30) + 5, 
      rating: match.operator.includes('Parveen') || match.operator.includes('KPN') ? 4.2 : 3.8,
      origin: match.origin,
      destination: match.destination
    }));
  } else {
    // 2. Fallback Generator (for routes not in PDF)
    // This ensures the app doesn't break if you search for obscure routes not yet in our DB
    
    // Seed random generator based on input string length
    const seed = normOrigin.length + normDest.length;
    const numBuses = 5 + (seed % 5); // 5 to 9 buses
    const baseDurationHours = Math.max(4, (seed * 2) % 12); 
    
    for (let i = 0; i < numBuses; i++) {
      const opIndex = (seed + i) % OPERATORS.length;
      const typeIndex = (seed + i) % TYPES.length;
      
      const hour = (6 + (i * 2)) % 24; 
      const depTime = `${hour.toString().padStart(2, '0')}:${(i*15)%60 === 0 ? '00' : (i*15)%60}`;
      const duration = `${baseDurationHours}h ${15 + (i*5)%45}m`;
      
      results.push({
        id: `gen-${i}`,
        operator: OPERATORS[opIndex],
        busType: TYPES[typeIndex],
        departureTime: depTime,
        arrivalTime: calculateArrival(depTime, duration),
        duration: duration,
        price: 0, // Hidden in UI
        availableSeats: 10 + (i * 3),
        rating: 3.0 + (i % 20) / 10,
        origin: origin, // Use original casing
        destination: destination // Use original casing
      });
    }
  }

  return { buses: results };
};
