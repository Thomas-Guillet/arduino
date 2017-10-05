int MA_LED = 13;

void setup() {

  Serial.begin(9600);
  pinMode(MA_LED, OUTPUT);
  
}

void loop() {

  char cmd;
  if(Serial.available()){
    
    cmd = Serial.read();
    if( cmd == '1' ){
       digitalWrite(MA_LED, HIGH);
    } else {
      digitalWrite(MA_LED, LOW);
    }
    
  }
  
}
