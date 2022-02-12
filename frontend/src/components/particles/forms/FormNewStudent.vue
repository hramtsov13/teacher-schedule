<template>
  <div
    class="border-grey-darker px-5 pt-5 border max-w-[800px] bg-white w-full rounded-md shadow-md"
  >
    <p class="border-grey-darker pb-2 border-b">Добавить нового ученика:</p>
    <el-form
      ref="formRef"
      :model="form"
      label-width="100%"
      label-position="top"
      class="gap-y-2 gap-x-4 grid grid-cols-2 py-4"
      @submit="onSubmit"
    >
      <el-form-item
        :label="form.name.label"
        :error="form.name.errorMessage.value"
        required
        class="mb-0"
      >
        <el-input v-model="form.name.value.value" clearable></el-input>
      </el-form-item>

      <el-form-item
        :label="form.lastName.label"
        :error="form.lastName.errorMessage.value"
        required
        class="mb-0"
      >
        <el-input v-model="form.lastName.value.value" clearable></el-input>
      </el-form-item>

      <el-form-item
        :label="form.phone.label"
        :error="form.phone.errorMessage.value"
        required
        class="mb-0"
      >
        <el-input v-model="form.phone.value.value" clearable></el-input>
      </el-form-item>

      <el-form-item
        :label="form.email.label"
        :error="form.email.errorMessage.value"
        required
        class="mb-0"
      >
        <el-input v-model="form.email.value.value" clearable></el-input>
      </el-form-item>

      <el-form-item :label="form.city.label" :error="form.city.errorMessage.value" class="mb-0">
        <el-input v-model="form.city.value.value" clearable></el-input>
      </el-form-item>

      <el-form-item
        :label="form.languageLevel.label"
        :error="form.languageLevel.errorMessage.value"
        required
        class="mb-0"
      >
        <el-select
          v-model="form.languageLevel.value.value"
          placeholder="Выберите уровень"
          class="w-full"
        >
          <el-option
            v-for="(level, index) in languageLevels"
            :key="index"
            :label="level"
            :value="level"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label="form.comment.label" class="col-span-2 mb-0">
        <el-input v-model="form.comment.value.value" type="textarea"></el-input>
      </el-form-item>

      <el-form-item class="w-full mt-4">
        <el-button
          type="primary"
          native-type="submit"
          :disabled="!isFormValid"
          :loading="isSubmitting"
          >Добавить</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useField, useForm, useIsFormValid, useIsSubmitting } from 'vee-validate'
import { MIN_PHONE_LENGTH } from '@/constants'
import { sleep } from '@/helpers/utils'
import { languageLevels } from '@/helpers/languageLevels'

const emit = defineEmits(['submitForm'])

const { handleSubmit, resetForm } = useForm({
  validationSchema: {
    name: 'alpha|required',
    lastName: 'alpha|required',
    phone: `required|min:${MIN_PHONE_LENGTH}`,
    languageLevel: 'required',
    email: 'required|email'
  }
})
const form = reactive({
  name: useField('name', '', {
    label: 'Имя',
    validateOnValueUpdate: true
  }),
  lastName: useField('lastName', '', {
    label: 'Фамилия',
    validateOnValueUpdate: true
  }),
  phone: useField('phone', '', {
    label: 'Телефон',
    validateOnValueUpdate: true
  }),
  email: useField('email', '', {
    label: 'E-mail'
  }),
  languageLevel: useField('languageLevel', '', {
    label: 'Уровень языка'
  }),
  city: useField('city', '', {
    label: 'Город'
  }),
  comment: useField('comment', '', {
    label: 'Комментарий'
  })
})

const onSubmit = handleSubmit(async (values) => {
  await sleep(1000)
  emit('submitForm', {
    id: 5,
    personalInfo: {
      ...values,
      phone: values.phone.replace(/\s/g, '')
    },
    lessons: []
  })
  resetForm()
})

const isFormValid = useIsFormValid()
const isSubmitting = useIsSubmitting()
</script>
