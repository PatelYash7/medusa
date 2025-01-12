import { z } from "zod"
import { booleanString } from "../../utils/common-validators"
import { createFindParams } from "../../utils/validators"

export type StoreGetPaymentProvidersParamsType = z.infer<
  typeof StoreGetPaymentProvidersParams
>
export const StoreGetPaymentProvidersParams = createFindParams({
  limit: 20,
  offset: 0,
}).merge(
  z.object({
    region_id: z.string(),
    id: z.union([z.string(), z.array(z.string())]).optional(),
    is_enabled: booleanString().optional(),
    $and: z.lazy(() => StoreGetPaymentProvidersParams.array()).optional(),
    $or: z.lazy(() => StoreGetPaymentProvidersParams.array()).optional(),
  })
)
