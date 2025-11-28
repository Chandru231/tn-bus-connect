// This file acts as the "Database" for the application.
// It contains data parsed from official TNSTC/SETC PDFs and other real-world schedules.

// Helper to estimate duration if not strictly known, based on route
const DURATIONS = {
  'Chennai-Coimbatore': '8h 30m',
  'Coimbatore-Chennai': '8h 30m',
  'Chennai-Madurai': '8h 45m',
  'Madurai-Chennai': '8h 45m',
  'Chennai-Trichy': '5h 30m',
  'Trichy-Chennai': '5h 30m',
  'Chennai-Salem': '5h 45m',
  'Salem-Chennai': '5h 45m',
  'Chennai-Bangalore': '6h 30m',
  'Bangalore-Chennai': '6h 30m',
  'Chennai-Tirunelveli': '10h 30m',
  'Tirunelveli-Chennai': '10h 30m',
  'Chennai-Nagercoil': '12h 00m',
  'Nagercoil-Chennai': '12h 00m',
  'Chennai-Velankanni': '7h 30m',
  'Velankanni-Chennai': '7h 30m',
  'Chennai-Thanjavur': '7h 00m',
  'Thanjavur-Chennai': '7h 00m',
};

// Default duration if route not found
const getDuration = (origin, dest) => {
  const key = `${origin.split(' ')[0]}-${dest.split(' ')[0]}`;
  return DURATIONS[key] || '7h 00m';
};

export const BUS_DATABASE = [
  // ==========================================
  // PDF PAGE 1: Air Condition Buses Services
  // ==========================================
  
  // Chennai -> Coimbatore
  { tripCode: '2100CHECOIAC', origin: 'Chennai', destination: 'Coimbatore', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '9h 00m', price: 663 },
  { tripCode: '2200CHECOIAC', origin: 'Chennai', destination: 'Coimbatore', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '9h 00m', price: 663 },
  
  // Chennai -> Dharmapuri
  { tripCode: '1315CHEDHAAC', origin: 'Chennai', destination: 'Dharmapuri', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '13:15', dur: '5h 30m', price: 401 },
  { tripCode: '2200CHEDHAAC', origin: 'Chennai', destination: 'Dharmapuri', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '5h 30m', price: 401 },
  
  // Chennai -> Dindigul
  { tripCode: '2130CHEDINAC', origin: 'Chennai', destination: 'Dindigul', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:30', dur: '7h 30m', price: 557 },
  
  // Chennai -> Karur
  { tripCode: '2045CHEKRUAC', origin: 'Chennai', destination: 'Karur', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '20:45', dur: '7h 00m', price: 501 },
  
  // Chennai -> Madurai
  { tripCode: '2100CHEMADAC', origin: 'Chennai', destination: 'Madurai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '9h 00m', price: 597 },
  { tripCode: '2130CHEMADAC', origin: 'Chennai', destination: 'Madurai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:30', dur: '9h 00m', price: 597 },
  { tripCode: '0900CHEMADAC', origin: 'Chennai', destination: 'Madurai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '09:00', dur: '9h 00m', price: 597 },
  
  // Chennai -> Nagercoil
  { tripCode: '1800CHENAGAC', origin: 'Chennai', destination: 'Nagercoil', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '18:00', dur: '12h 00m', price: 908 },
  
  // Chennai -> Namakkal
  { tripCode: '2130CHENAMAC', origin: 'Chennai', destination: 'Namakkal', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:30', dur: '6h 30m', price: 515 },
  
  // Chennai -> Pudukkottai
  { tripCode: '2200CHEPUKAC', origin: 'Chennai', destination: 'Pudukkottai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '7h 30m', price: 497 },
  
  // Chennai -> Rameswaram
  { tripCode: '1600CHERAMAC', origin: 'Chennai', destination: 'Rameswaram', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '16:00', dur: '10h 30m', price: 803 },
  
  // Chennai -> Salem
  { tripCode: '1300CHESALAC', origin: 'Chennai', destination: 'Salem', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '13:00', dur: '6h 00m', price: 444 },
  { tripCode: '2300CHESALAC', origin: 'Chennai', destination: 'Salem', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '23:00', dur: '6h 00m', price: 444 },
  
  // Chennai -> Sivaganga
  { tripCode: '2115CHESIVAC', origin: 'Chennai', destination: 'Sivaganga', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:15', dur: '8h 30m', price: 602 },
  
  // Chennai -> Thanjavur
  { tripCode: '2200CHETHAAC', origin: 'Chennai', destination: 'Thanjavur', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '7h 00m', price: 457 },
  
  // Chennai -> Theni
  { tripCode: '2100CHETHEAC', origin: 'Chennai', destination: 'Theni', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '9h 30m', price: 660 },
  
  // Chennai -> Tirunelveli
  { tripCode: '2000CHETIUAC', origin: 'Chennai', destination: 'Tirunelveli', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '20:00', dur: '10h 30m', price: 809 },
  { tripCode: '1930CHETIUAC', origin: 'Chennai', destination: 'Tirunelveli', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:30', dur: '10h 30m', price: 809 },
  
  // Chennai -> Tiruppur
  { tripCode: '2100CHETPPAC', origin: 'Chennai', destination: 'Tiruppur', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '8h 30m', price: 608 },
  
  // Chennai -> Tiruvarur
  { tripCode: '2130CHETVRAC', origin: 'Chennai', destination: 'Tiruvarur', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:30', dur: '7h 30m', price: 426 },
  { tripCode: '1010CHETVRAC', origin: 'Chennai', destination: 'Tiruvarur', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '10:10', dur: '7h 30m', price: 426 },
  
  // Chennai -> Trichy
  { tripCode: '2230CHETRIAC', origin: 'Chennai', destination: 'Trichy', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:30', dur: '5h 30m', price: 431 },
  { tripCode: '1000CHETRIAC', origin: 'Chennai', destination: 'Trichy', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '10:00', dur: '5h 30m', price: 431 },
  { tripCode: '2300CHETRIAC', origin: 'Chennai', destination: 'Trichy', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '23:00', dur: '5h 30m', price: 431 },
  
  // Chennai -> Tuticorin
  { tripCode: '1930CHETUTAC', origin: 'Chennai', destination: 'Tuticorin', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:30', dur: '10h 30m', price: 782 },
  
  // Chennai -> Velankanni
  { tripCode: '1100CHEVEAAC', origin: 'Chennai', destination: 'Velankanni', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '11:00', dur: '7h 30m', price: 440 },
  { tripCode: '2230CHEVEAAC', origin: 'Chennai', destination: 'Velankanni', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:30', dur: '7h 30m', price: 440 },

  // ==========================================
  // PDF PAGE 1 (Right Column): Return Journeys
  // ==========================================

  // Coimbatore -> Chennai
  { tripCode: '2100COICHEAC', origin: 'Coimbatore', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '9h 00m', price: 663 },
  { tripCode: '2200COICHEAC', origin: 'Coimbatore', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '9h 00m', price: 663 },

  // Dharmapuri -> Chennai
  { tripCode: '0900DHACHEAC', origin: 'Dharmapuri', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '09:00', dur: '5h 30m', price: 401 },
  { tripCode: '2200DHACHEAC', origin: 'Dharmapuri', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '5h 30m', price: 401 },

  // Dindigul -> Chennai
  { tripCode: '2015DINCHEAC', origin: 'Dindigul', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '20:15', dur: '7h 30m', price: 557 },

  // Karur -> Chennai
  { tripCode: '2045KRUCHEAC', origin: 'Karur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '20:45', dur: '7h 00m', price: 501 },

  // Madurai -> Chennai
  { tripCode: '2030MADCHEAC', origin: 'Madurai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '20:30', dur: '9h 00m', price: 597 },
  { tripCode: '0900MADCHEAC', origin: 'Madurai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '09:00', dur: '9h 00m', price: 597 },
  { tripCode: '2100MADCHEAC', origin: 'Madurai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '9h 00m', price: 597 },

  // Nagercoil -> Chennai
  { tripCode: '1800NAGCHEAC', origin: 'Nagercoil', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '18:00', dur: '12h 00m', price: 908 },

  // Namakkal -> Chennai
  { tripCode: '2115NAMCHEAC', origin: 'Namakkal', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:15', dur: '6h 30m', price: 515 },

  // Pudukkottai -> Chennai
  { tripCode: '2145PUKCHEAC', origin: 'Pudukkottai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:45', dur: '7h 30m', price: 497 },

  // Rameswaram -> Chennai
  { tripCode: '1605RAMCHEAC', origin: 'Rameswaram', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '16:05', dur: '10h 30m', price: 803 },

  // Salem -> Chennai
  { tripCode: '1300SALCHEAC', origin: 'Salem', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '13:00', dur: '6h 00m', price: 444 },
  { tripCode: '2300SALCHEAC', origin: 'Salem', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '23:00', dur: '6h 00m', price: 444 },

  // Sivaganga -> Chennai
  { tripCode: '1915SIVCHEAC', origin: 'Sivaganga', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:15', dur: '8h 30m', price: 602 },

  // Thanjavur -> Chennai
  { tripCode: '2200THACHEAC', origin: 'Thanjavur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '7h 00m', price: 457 },

  // Theni -> Chennai
  { tripCode: '1945THECHEAC', origin: 'Theni', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:45', dur: '9h 30m', price: 660 },

  // ==========================================
  // PDF PAGE 2
  // ==========================================

  // Tirunelveli -> Chennai
  { tripCode: '1715TIUCHEAC', origin: 'Tirunelveli', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '17:15', dur: '10h 30m', price: 809 },
  { tripCode: '1930TIUCHEAC', origin: 'Tirunelveli', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:30', dur: '10h 30m', price: 809 },

  // Tiruppur -> Chennai
  { tripCode: '2100TPPCHEAC', origin: 'Tiruppur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:00', dur: '8h 30m', price: 608 },

  // Tiruvarur -> Chennai
  { tripCode: '2130TVRCHEAC', origin: 'Tiruvarur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '21:30', dur: '7h 30m', price: 426 },
  { tripCode: '0815TVRCHEAC', origin: 'Tiruvarur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '08:15', dur: '7h 30m', price: 426 },

  // Trichy -> Chennai
  { tripCode: '1300TRICHEAC', origin: 'Trichy', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '13:00', dur: '5h 30m', price: 431 },
  { tripCode: '2230TRICHEAC', origin: 'Trichy', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:30', dur: '5h 30m', price: 431 },
  { tripCode: '2300TRICHEAC', origin: 'Trichy', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '23:00', dur: '5h 30m', price: 431 },

  // Tuticorin -> Chennai
  { tripCode: '1900TUTCHEAC', origin: 'Tuticorin', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '19:00', dur: '10h 30m', price: 782 },

  // Velankanni -> Chennai
  { tripCode: '1100VEACHEAC', origin: 'Velankanni', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '11:00', dur: '7h 30m', price: 440 },
  { tripCode: '2200VEACHEAC', origin: 'Velankanni', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Seater', dep: '22:00', dur: '7h 30m', price: 440 },

  // ==========================================
  // PDF PAGE 3: Non AC Sleeper Services
  // ==========================================

  { tripCode: '2300CHEMADNB', origin: 'Chennai', destination: 'Madurai', operator: 'TNSTC/SETC', type: 'Non-AC Sleeper', dep: '23:00', dur: '9h 00m', price: 710 },
  { tripCode: '2000MADCHENB', origin: 'Madurai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'Non-AC Sleeper', dep: '20:00', dur: '9h 00m', price: 710 },

  // ==========================================
  // PDF PAGE 4: AC Sleeper - Seater Bus Services
  // ==========================================
  
  { tripCode: '2130CHEKRUAB', origin: 'Chennai', destination: 'Karur', operator: 'TNSTC/SETC', type: 'AC Sleeper Seater', dep: '21:30', dur: '7h 00m', price: 501 },
  { tripCode: '2130KRUCHEAB', origin: 'Karur', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper Seater', dep: '21:30', dur: '7h 00m', price: 501 },

  // ==========================================
  // PDF PAGE 5: AC Sleeper Buses Services
  // ==========================================

  // Chennai -> Bengaluru
  { tripCode: '2230CHEBANAS', origin: 'Chennai', destination: 'Bangalore', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:30', dur: '6h 30m', price: 716 },
  
  // Chennai -> Bodi
  { tripCode: '2000CHEBODAS', origin: 'Chennai', destination: 'Bodi', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '20:00', dur: '10h 30m', price: 1050 },
  
  // Chennai -> Gobi
  { tripCode: '1900CHEGOBAS', origin: 'Chennai', destination: 'Gobi', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '19:00', dur: '8h 00m', price: 900 },
  
  // Chennai -> Keezhakarai
  { tripCode: '2100CHEKEZAS', origin: 'Chennai', destination: 'Keezhakarai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '21:00', dur: '9h 30m', price: 1080 },
  
  // Chennai -> Madurai (Sleeper)
  { tripCode: '2200CHEMADAS', origin: 'Chennai', destination: 'Madurai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:00', dur: '9h 00m', price: 920 },
  
  // Chennai -> Salem (Sleeper)
  { tripCode: '2200CHESALAS', origin: 'Chennai', destination: 'Salem', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:00', dur: '6h 00m', price: 680 },
  
  // Chennai -> Sivakasi
  { tripCode: '2100CHESVIAS', origin: 'Chennai', destination: 'Sivakasi', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '21:00', dur: '10h 30m', price: 1075 },
  
  // Chennai -> Tirunelveli (Sleeper)
  { tripCode: '2100CHETIUAS', origin: 'Chennai', destination: 'Tirunelveli', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '21:00', dur: '11h 00m', price: 1245 },
  
  // Chennai -> Tuticorin (Sleeper)
  { tripCode: '2000CHETUTAS', origin: 'Chennai', destination: 'Tuticorin', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '20:00', dur: '11h 00m', price: 1200 },

  // Reverse Routes (Sleeper)
  { tripCode: '2230BANCHEAS', origin: 'Bangalore', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:30', dur: '6h 30m', price: 716 },
  { tripCode: '2200BANCOIAS', origin: 'Bangalore', destination: 'Coimbatore', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:00', dur: '7h 00m', price: 745 },
  { tripCode: '1900BODCHEAS', origin: 'Bodi', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '19:00', dur: '10h 30m', price: 1050 },
  { tripCode: '2000GOBCHEAS', origin: 'Gobi', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '20:00', dur: '8h 00m', price: 900 },
  { tripCode: '1800KEZCHEAS', origin: 'Keezhakarai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '18:00', dur: '9h 30m', price: 1080 },
  { tripCode: '2200MADCHEAS', origin: 'Madurai', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:00', dur: '9h 00m', price: 920 },
  { tripCode: '2200SALCHEAS', origin: 'Salem', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '22:00', dur: '6h 00m', price: 680 },
  { tripCode: '1930SVICHEAS', origin: 'Sivakasi', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '19:30', dur: '10h 30m', price: 1075 },
  { tripCode: '1900TIUCHEAS', origin: 'Tirunelveli', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '19:00', dur: '11h 00m', price: 1245 },
  { tripCode: '2000TUTCHEAS', origin: 'Tuticorin', destination: 'Chennai', operator: 'TNSTC/SETC', type: 'AC Sleeper', dep: '20:00', dur: '11h 00m', price: 1200 },

  // ==========================================
  // EXISTING SUPPLEMENTARY DATA (Private & Others)
  // ==========================================
  { origin: 'Chennai', destination: 'Madurai', operator: 'Parveen Travels', type: 'AC Sleeper', dep: '21:30', dur: '7h 45m', price: 1200 },
  { origin: 'Chennai', destination: 'Madurai', operator: 'KPN Travels', type: 'AC Sleeper', dep: '22:00', dur: '7h 30m', price: 1150 },
  { origin: 'Chennai', destination: 'Madurai', operator: 'IntrCity SmartBus', type: 'AC Sleeper', dep: '23:15', dur: '7h 15m', price: 1350 },
  { origin: 'Madurai', destination: 'Chennai', operator: 'Parveen Travels', type: 'AC Sleeper', dep: '22:15', dur: '7h 50m', price: 1200 },
  { origin: 'Chennai', destination: 'Trichy', operator: 'RKT Tours', type: 'Non-AC Sleeper', dep: '22:30', dur: '5h 30m', price: 750 },
  { origin: 'Chennai', destination: 'Coimbatore', operator: 'KPN Travels', type: 'AC Sleeper', dep: '21:00', dur: '8h 00m', price: 1100 },
  { origin: 'Chennai', destination: 'Coimbatore', operator: 'Conti Travels', type: 'AC Sleeper', dep: '22:30', dur: '7h 45m', price: 1250 },
  { origin: 'Chennai', destination: 'Bangalore', operator: 'KSRTC Airavat', type: 'Volvo AC Multi Axle', dep: '06:00', dur: '6h 30m', price: 850 },
  { origin: 'Chennai', destination: 'Bangalore', operator: 'KSRTC Airavat', type: 'Volvo AC Multi Axle', dep: '14:00', dur: '6h 30m', price: 850 },
  { origin: 'Chennai', destination: 'Bangalore', operator: 'Asian Xpress', type: 'AC Sleeper', dep: '23:00', dur: '6h 00m', price: 1050 },
];
