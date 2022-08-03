# Learning how to architect Quasar (quasar-architecture)

NOTE this project is an example for my clients!
Might not make sense to you if we've never spoken before :)

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

# Checklist
## Model
- If a new model is needed, create it first
- usually we'll build all our models first. So if a model is built on your backend your next move should be to add it to the frontend

## Router
- Create the page
- Decide if any dynamic params are required
- Send params down as props

## Page
- Check page recieved props
- This is likely **very barebones**
- DOES NOT make requests
- Sends props down to view

## View
- Check recieved props from the page
- Now is a good time to setup sample data
- All request/global state management happens here
- In complex cases, views may display other views

## Components
- Check recieved data from view
- NEVER make requests
- NEVER change global state
- Three responsibilities
	- **props**: display props passed from parent
	- **emit**: notify the parent of any changes
	- **expose**: in rare cases - like dialogs `hide`/`show` - expose methods on the component

