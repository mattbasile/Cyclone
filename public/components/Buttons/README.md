## Buttons Component ##
___________


In your HTML:

`<cyclone-button color="blue" text="Help" hover="true"></cyclone-button>`

- **color attribute**: defines the background color and hover color for the button. Colors are not customizable, only relate to the default color palette presented in the root README.
- **text attribute**: defines the inner HTML text of the button.
- **hover attribute**: defines whether or not the button will change background color on hover. It automatically defaults to false. 


Under the Hood: 

Hover = True: 

`<button class="btn btn-${color} hover:bg-${color}-700">${text}</button>` 

Hover = False:

`<button class="btn btn-${color}">${text}</button>`

- We're using the attributes passed in to dynamically update these values.
- The default values for these are: `color = blue` & `text=button`.
- Default hover value is false.
- If a foreign character is entered in the color attribute, the background will not be rendered however the button will remain.