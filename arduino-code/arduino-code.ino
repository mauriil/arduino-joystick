int VRx = A0;
int VRy = A1;
int POT = A2;
int SW = 2;

int xPosition = 0;
int yPosition = 0;
int SW_state = 0;
int mapX = 0;
int mapY = 0;
int mapPOT = 0;

void setup() {
  Serial.begin(9600); 
  
  pinMode(VRx, INPUT);
  pinMode(VRy, INPUT);
  pinMode(POT, INPUT);
  pinMode(SW, INPUT_PULLUP); 
  
}

void loop() {
  xPosition = analogRead(VRx);
  yPosition = analogRead(VRy);
  SW_state = digitalRead(SW);
  mapX = map(xPosition, 0, 1023, 0, 180);
  mapY = map(yPosition, 0, 1023, 0, 180);
  mapPOT = map(analogRead(POT), 0, 678, 0, 180);
  
  Serial.print(mapX);
  Serial.print("|");
  Serial.print(mapY);
  Serial.print("|");
  Serial.print(mapPOT);
  Serial.print("|");
  Serial.println(SW_state);

  delay(100);
}
