import {
  ExternalModuleDeclaration,
  InternalModuleDeclaration,
  MedusaModule,
  MODULE_PACKAGE_NAMES,
  Modules,
} from "@medusajs/modules-sdk"
import { IProductModuleService } from "@medusajs/types"
import { moduleDefinition } from "../module-definition"
import {
  InitializeModuleInjectableDependencies,
  ProductServiceInitializeCustomDataLayerOptions,
  ProductServiceInitializeOptions,
} from "../types"

export const initialize = async (
  options?:
    | ProductServiceInitializeOptions
    | ProductServiceInitializeCustomDataLayerOptions
    | ExternalModuleDeclaration,
  injectedDependencies?: InitializeModuleInjectableDependencies
): Promise<IProductModuleService> => {
  const serviceKey = Modules.PRODUCT

  const loaded = await MedusaModule.bootstrap(
    serviceKey,
    MODULE_PACKAGE_NAMES[Modules.PRODUCT],
    options as InternalModuleDeclaration | ExternalModuleDeclaration,
    moduleDefinition,
    injectedDependencies
  )

  return loaded[serviceKey] as IProductModuleService
}
