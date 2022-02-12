import { defineRule } from 'vee-validate'
import { required, email, min, alpha } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('alpha', alpha)
