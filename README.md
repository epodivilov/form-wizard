# Form wizard

Automatic form generator by JSON configuration.

### Example configuration
```JSON
{
  "header": "Form header",
  "items": [
    {
      "type": "number",
      "label": "number"
    },
    {
      "type": "text",
      "label": "text"
    },
    {
      "type": "checkbox",
      "label": "checkbox"
    },
    {
      "type": "date",
      "label": "date"
    },
    {
      "type": "textarea",
      "label": "textarea"
    },
    {
      "type": "group",
      "label": "radio",
      "items": [
        {
          "type": "radio",
          "label": "radio #1"
        },
        {
          "type": "radio",
          "label": "radio #2"
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

[Try here]()