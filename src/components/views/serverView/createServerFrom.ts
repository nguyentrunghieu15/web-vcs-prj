import { ServerStatus } from "@/plugins/axios/server/interfaces";
import { serverService } from "@/plugins/axios/server/serverService";
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
    serverName: yup.string().required(),
    ipv4: yup
        .string()
        .matches(
            /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/,
            "This is not format of IPv4"
        )
        .required(),
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

const [serverName, serverNameAttrs] = defineField("serverName");
const [ipv4, ipv4Attrs] = defineField("ipv4");
const [status, statusAttrs] = defineField("status");

const onSubmit = handleSubmit((value) => {
    serverService.createServer({
        name: value["serverName"],
        ipv4: value["ipv4"],
        status: value["status"] ? ServerStatus.ON : ServerStatus.OFF,
    });
    return true;
});

export default {
    resetForm,
    setFieldValue,
    serverName,
    ipv4,
    status,
    onSubmit,
    errors,
    isValidating,
};
