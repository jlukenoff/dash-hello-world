# A minimal Plotly Dash App

## System requirements

Python >= 3.8 (3.11 preferred)
Node >= 12 (18 preferred)

## Setup instructions

From the project root directory

```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

Build the custom react components

```bash
npm install
# with the virtual env activated
npm run build
```

Run the app

```bash
python3 main.py
```
