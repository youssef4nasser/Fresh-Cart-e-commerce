import express from 'express'
import * as controller from './subCategory.controller.js'
import { validate } from '../../middleware/validate.js'
import { addSubCategoryValidaion, idValidate, updateSubCategoryValidation } from './subCategory.validation.js'
import { allowedTo } from '../../middleware/authorize.js'
import { authenticate } from '../../middleware/authenticate.js'

const subCategoryRouter = express.Router({mergeParams: true})

subCategoryRouter.route('/')
    .post(authenticate, allowedTo("admin"), validate(addSubCategoryValidaion), controller.addSubCategory)
    .get(controller.getAllSubCategories)

subCategoryRouter.route('/:id')
    .get(validate(idValidate), controller.getSubCategory)
    .put(authenticate, allowedTo("admin"), validate(updateSubCategoryValidation), controller.updateSubCategory)
    .delete(authenticate, allowedTo("admin"), validate(idValidate), controller.deleteSubCategory)

export default subCategoryRouter
