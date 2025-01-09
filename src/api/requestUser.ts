import { useQuery } from "@pinia/colada";

enum ResponseCode {
    ErrSuccess = 0,
    ErrBadRequest = 400,
    ErrUnauthorized = 401,
    ErrNotFound = 404,
    ErrInternalServerError = 500,

    // more biz errors
    ErrEmailAlreadyUse = 1001,
}

interface userDataRequest{
    username: string;
}

export async function useQuestData(req:userDataRequest){
    return useQuery({
        key:() => ["userDataQuest", req.username],
        query: () => {
            return apiFetch<Response>("/api/mcinfo")
        }
    })
}