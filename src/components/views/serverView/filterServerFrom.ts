import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
    createdAtFrom: yup.date().optional(),
    createdAtTo: yup.date().min(yup.ref("createdAtFrom")).optional(),
    updatedAtFrom: yup.date().optional(),
    updatedAtTo: yup.date().min(yup.ref("createdAtFrom")).optional(),
    status: yup.boolean(),
});

const {
    handleSubmit,
    errors,
    isValidating,
    defineField,
    setFieldValue,
    resetForm,
} = useForm({
    validationSchema: schema,
});

const [createdAtFrom, createdAtFromAttrs] = defineField("createdAtFrom");
const [createdAtTo, createdAtToAttrs] = defineField("createdAtTo");
const [updatedAtFrom, updatedAtFromAttrs] = defineField("updatedAtFrom");
const [updatedAtTo, updatedAtToAttrs] = defineField("updatedAtTo");
const [status, statusAttrs] = defineField("status");

const onSubmit = handleSubmit((value) => {
    console.log(value);
    return true;
});

export default {
    resetForm,
    setFieldValue,
    onSubmit,
    errors,
    isValidating,
    status,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
};
