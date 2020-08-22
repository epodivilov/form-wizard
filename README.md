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

[Try here](https://epodivilov.github.io/form-wizard/config?config=ewogICJoZWFkZXIiOiAiRm9ybSBoZWFkZXIiLAogICJpdGVtcyI6IFsKICAgIHsKICAgICAgInR5cGUiOiAibnVtYmVyIiwKICAgICAgImxhYmVsIjogIm51bWJlciIsCiAgICAgICJ2YWx1ZSI6IDEwCiAgICB9LAogICAgewogICAgICAidHlwZSI6ICJ0ZXh0IiwKICAgICAgImxhYmVsIjogInRleHQiLAogICAgICAidmFsdWUiOiAiZGVmYXVsdCB0ZXh0IgogICAgfSwKICAgIHsKICAgICAgInR5cGUiOiAiY2hlY2tib3giLAogICAgICAibGFiZWwiOiAiY2hlY2tib3giLAogICAgICAidmFsdWUiOiB0cnVlCiAgICB9LAogICAgewogICAgICAidHlwZSI6ICJkYXRlIiwKICAgICAgImxhYmVsIjogImRhdGUiLAogICAgICAidmFsdWUiOiAiMjAxMy0wMS0wOCIKICAgIH0sCiAgICB7CiAgICAgICJ0eXBlIjogInRleHRhcmVhIiwKICAgICAgImxhYmVsIjogInRleHRhcmVhIiwKICAgICAgInZhbHVlIjogIlNvbWUgdGV4dCIKICAgIH0sCiAgICB7CiAgICAgICJ0eXBlIjogImdyb3VwIiwKICAgICAgImxhYmVsIjogInJhZGlvIiwKICAgICAgIml0ZW1zIjogWwogICAgICAgIHsKICAgICAgICAgICJ0eXBlIjogInJhZGlvIiwKICAgICAgICAgICJsYWJlbCI6ICJyYWRpbyAjMSIsCiAgICAgICAgICAibmFtZSI6ICJncm91cCIsCiAgICAgICAgICAidmFsdWUiOiB0cnVlCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAidHlwZSI6ICJyYWRpbyIsCiAgICAgICAgICAibGFiZWwiOiAicmFkaW8gIzIiLAogICAgICAgICAgIm5hbWUiOiAiZ3JvdXAiCiAgICAgICAgfQogICAgICBdCiAgICB9CiAgXSwKICAiYWN0aW9ucyI6IFsKICAgIHsKICAgICAgImxhYmVsIjogIkNhbmNlbCIKICAgIH0sCiAgICB7CiAgICAgICJsYWJlbCI6ICJPayIKICAgIH0KICBdCn0%3D)