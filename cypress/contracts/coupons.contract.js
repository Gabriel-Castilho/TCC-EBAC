const Joi = require ('joi')

const coupomSchema = Joi.object({
    code:Joi.string(),
    amount:Joi.string(),
    discount_type:Joi.array(Joi.string()),
    description:Joi.string(),
    date_expires:Joi.string(),
    date_expires_gmt:Joi.string(),
    individual_use:Joi.string(),
    products_id:Joi.number(),
    //products_id:Joi.array(Joi.number()),
    excluded_product_ids:Joi.string(),
   //  excluded_product_ids:Joi.array(Joi.number()),
    usage_limit:Joi.string(),
    usage_limit_per_user:Joi.string(),
    limit_usage_to_x_items:Joi.string(),
    free_shipping:Joi.string(),
    product_categories:Joi.string(),
   //product_categories:Joi.array(Joi.number()),
   excluded_product_categories:Joi.string(),
   //excluded_product_categories:Joi.array(Joi.number()),
   exclude_sale_items:Joi.string(),
   minimum_amount:Joi.string(),
   maximum_amount:Joi.string(),
   email_restrictions:Joi.string(),
   meta_data:Joi.string()
})

export default coupomSchema;