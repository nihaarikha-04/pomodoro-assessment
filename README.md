# Pixel-art Style Pomodoro Timer App

A Pomodoro Timer desktop application with work time and automatically calculated break time which is 20 percent of the work time, visual candle animations and task session tracking.

# Setup Steps

1. **Clone the repository**:
   
```bash
git clone https://github.com/nihaarikha-04/pomodoro-assessment.git
cd pomodoro-assessment

2. Install dependencies:

```bash
npm install

3. Run the app:

```bash
npm start

# Tech Stack Used

Frontend: React, CSS
State Management: React useState, useEffect, useRef
Animations: Image toggling for candle flame effect
Electron Integration: Window controls for minimize and close
Other: Vanilla JavaScript for timer logic

# Screenshots

Home Page<img width="685" height="707" alt="Home_Page" src="https://github.com/user-attachments/assets/81210ee4-1be6-4a6f-99a4-72985f49ecfd" />

Timer Page<img width="721" height="687" alt="Timer_Page" src="https://github.com/user-attachments/assets/3cc4b525-01dc-43c0-9989-871b536cb9c0" />

Sessions Page<img width="703" height="688" alt="Sessions_Page" src="https://github.com/user-attachments/assets/ea3abd3a-237e-43d7-afa6-d4c3a953a60e" />

Running Timer Page<img width="685" height="687" alt="RunningTimer_Page" src="https://github.com/user-attachments/assets/e0e00039-9933-4f21-8e68-f357af5d2399" />

Completion Page<img width="687" height="687" alt="Completion_Page" src="https://github.com/user-attachments/assets/53ab6388-3fae-4c8e-9ced-b76c9aa3b388" />

# Assumptions

Break time is calculated as 20% of work time automatically.
Tasks in the Task Sessions list can be started directly from the modal card.
Visual candle animation reflects session progress by melting at three different stages of the timer.
