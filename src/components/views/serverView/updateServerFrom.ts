import { ServerStatus } from "@/plugins/axios/server/interfaces";
import { serverService } from "@/plugins/axios/server/serverService";
import { useServerStore } from "@/stores/serverStore";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
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

const [name, nameAttrs] = defineField("name");
const [ipv4, ipv4Attrs] = defineField("ipv4");
const [status, statusAttrs] = defineField("status");

const onSubmit = handleSubmit((value) => {
    const serverStore = useServerStore();
    const selectedServer = serverStore.selectedServerComputed;
    if (selectedServer.value?.id) {
        serverService.updateServer({
            id: selectedServer.value?.id,
            name: value["name"],
            ipv4: value["ipv4"],
            status: value["status"] ? ServerStatus.ON : ServerStatus.OFF,
        });
    }
    return true;
});

export default {
    resetForm,
    setFieldValue,
    name,
    ipv4,
    status,
    onSubmit,
    errors,
    isValidating,
};
