# Form wizard

Automatic form generator by JSON configuration.

### Example configuration
```JSON
{
  "header": "Form header",
  "items": [
    {
      "type": "number",
      "label": "number",
      "value": 10
    },
    {
      "type": "text",
      "label": "text",
      "value": "default text"
    },
    {
      "type": "checkbox",
      "label": "checkbox",
      "value": true
    },
    {
      "type": "date",
      "label": "date",
      "value": "2013-01-08"
    },
    {
      "type": "textarea",
      "label": "textarea",
      "value": "Some text"
    },
    {
      "type": "group",
      "label": "radio",
      "items": [
        {
          "type": "radio",
          "label": "radio #1",
          "name": "group",
          "value": true
        },
        {
          "type": "radio",
          "label": "radio #2",
          "name": "group"
        }
      ]
    }
  ],
  "actions": [
    {
      "label": "Cancel"
    },
    {
      "label": "Ok"
    }
  ]
}
```

[Try here](https://epodivilov.github.io/form-wizard/)