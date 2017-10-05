int MA_LED = 13;
int MON_POTAR = A0;

void setup() {

  Serial.begin(9600);
  pinMode(MA_LED, OUTPUT);
  pinMode(MON_POTAR, INPUT);
  
}

void loop() {

  

  int v = map(analogRead(MON_POTAR), 0, 1023, 0, 360);
  Serial.println(v);
  delay(50);
//  if(v == 1023){
//    digitalWrite(MA_LED, HIGH);
//    delay(500);
//  }else{
//    digitalWrite(MA_LED, LOW);
//  }
//
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
