---
to: <%= directories.models %>/<%= modelPascal %>/types/<%= modelPascal %>.ts
---
import { Model } from "shared/types/Model"

export interface <%= modelPascal %> extends Model {
  id: string
}
