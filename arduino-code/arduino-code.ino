int VRx_1 = A0;
int VRy_1 = A1;
int VRx_2 = A2;
int VRy_2 = A3;
int VRx_3 = A4;
int VRy_3 = A5;

int POT_1 = A6;
int POT_2 = A7;
int POT_3 = A8;
int POT_4 = A9;

int toggle_1 = 2;
int toggle_2 = 3;
int toggle_3 = 4;
int toggle_4 = 5;
int toggle_5 = 6;
int toggle_6 = 7;
int toggle_7 = 8;
int toggle_8 = 9;
int toggle_9 = 10;


void setup() {
  Serial.begin(9600); 
  
  pinMode(VRx_1, INPUT);
  pinMode(VRy_1, INPUT);
  pinMode(VRx_2, INPUT);
  pinMode(VRy_2, INPUT);
  pinMode(VRx_3, INPUT);
  pinMode(VRy_3, INPUT);
  pinMode(POT_1, INPUT);
  pinMode(POT_2, INPUT);
  pinMode(POT_3, INPUT);
  pinMode(POT_4, INPUT);
  pinMode(toggle_1, INPUT_PULLUP);
  pinMode(toggle_2, INPUT_PULLUP);
  pinMode(toggle_3, INPUT_PULLUP);
  pinMode(toggle_4, INPUT_PULLUP);
  pinMode(toggle_5, INPUT_PULLUP);
  pinMode(toggle_6, INPUT_PULLUP);
  pinMode(toggle_7, INPUT_PULLUP);
  pinMode(toggle_8, INPUT_PULLUP);
  pinMode(toggle_9, INPUT_PULLUP);
  
}

void loop() {  
  Serial.print(map(analogRead(VRx_1), 0, 1023, 0, 180));
  Serial.print("|");
  Serial.print(map(analogRead(VRy_1), 0, 1023, 30, 150));
  Serial.print("|");
  Serial.print(map(analogRead(VRx_2), 0, 1023, 0, 180));
  Serial.print("|");
  Serial.print(map(analogRead(VRy_2), 0, 1023, 0, 180));
  Serial.print("|");
  Serial.print(map(analogRead(VRx_3), 0, 1023, 0, 180));
  Serial.print("|");
  Serial.print(map(analogRead(VRy_3), 0, 1023, 0, 180));
  Serial.print("|");
  Serial.print(map(analogRead(POT_1), 0, 1023, 0, 180));  
  Serial.print("|");
  Serial.print(map(analogRead(POT_2), 0, 1023, 0, 180));  
  Serial.print("|");
  Serial.print(map(analogRead(POT_3), 0, 1023, 0, 180));  
  Serial.print("|");
  Serial.print(map(analogRead(POT_4), 0, 1023, 0, 180));  
  Serial.print("|");
  if(digitalRead(toggle_1) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_2) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_3) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_4) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_5) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_6) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_7) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_8) == HIGH){ Serial.print("0");    
  } else { Serial.print("1");}
  Serial.print("|");
  if(digitalRead(toggle_9) == HIGH){ Serial.println("0");    
  } else { Serial.println("1");}

  delay(100);
}
