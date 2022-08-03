---
to: <%= directories.models %>/<%= modelPascal %>/<%= modelPascal %>Schema.json
---
{
  "entity": "<%= modelSnakePlural %>",
  "pascalName": "<%= modelPascal %>",
  "color": "grey",
  "fields": {
    "createdAt": {
      "dataType": "String"
    },
    "updatedAt": {
      "dataType": "String"
    }
  }
}
