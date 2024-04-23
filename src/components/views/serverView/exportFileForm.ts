import { ServerStatus, TypeSort } from "@/plugins/axios/server/interfaces";
import { serverService } from "@/plugins/axios/server/serverService";
import { useServerStore } from "@/stores/serverStore";
import { useUserStore } from "@/stores/userStore";
import { useForm } from "vee-validate";
import * as yup from "yup";

export default function () {
    const schema = yup.object({
        createdAtFrom: yup.date().optional(),
        createdAtTo: yup.date().min(yup.ref("createdAtFrom")).optional(),
        updatedAtFrom: yup.date().optional(),
        updatedAtTo: yup.date().min(yup.ref("createdAtFrom")).optional(),
        status: yup.boolean(),
        fileName: yup.string().min(4).required(),
        fromPage: yup
            .number()
            .min(1)
            .transform((_, val) => (val === "" ? undefined : Number(val)))
            .optional(),
        toPage: yup
            .number()
            .min(yup.ref("fromPage"))
            .transform((_, val) => (val === "" ? undefined : Number(val)))
            .optional(),
        sort: yup.string().optional(),
        sortBy: yup.string().optional(),
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
    const [fileName, fileNameAttrs] = defineField("fileName");
    const [fromPage, pageAttrs] = defineField("fromPage");
    const [toPage, pageSizeAttrs] = defineField("toPage");
    const [sort, sortAttrs] = defineField("sort");
    const [sortBy, sortByAttrs] = defineField("sortBy");

    const serverStore = useServerStore();

    const userStore = useUserStore();

    const onSubmit = handleSubmit(async (value) => {
        serverService.exportServer({
            userId: userStore.currentUser.value?.id || 1,
            file: {
                fileName: value["fileName"] + ".xlsx",
            },
            filter: {
                createdAtFrom: value["createdAtFrom"]
                    ? new Date(value["createdAtFrom"]).toISOString()
                    : undefined,
                createdAtTo: value["createdAtTo"]
                    ? new Date(value["createdAtTo"]).toISOString()
                    : undefined,
                updatedAtFrom: value["updatedAtFrom"]
                    ? new Date(value["updatedAtFrom"]).toISOString()
                    : undefined,
                updatedAtTo: value["updatedAtTo"]
                    ? new Date(value["updatedAtTo"]).toISOString()
                    : undefined,
                status: status.value
                    ? ServerStatus.ON
                    : status.value === undefined
                    ? undefined
                    : ServerStatus.OFF,
            },
            pagination: {
                pageSize: 10,
                fromPage: value["fromPage"] ? value["fromPage"] : undefined,
                toPage: value["toPage"] ? value["toPage"] : undefined,
                sort:
                    value["toPage"] === undefined || value["toPage"] === "None"
                        ? undefined
                        : value["toPage"] === "Asc"
                        ? TypeSort.ASC
                        : TypeSort.DESC,
                sortBy: value["sortBy"],
            },
        });
        return true;
    });
    return {
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
        fileName,
        fromPage,
        toPage,
        sort,
        sortBy,
    };
}
