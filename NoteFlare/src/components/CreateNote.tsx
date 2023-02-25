import { NoteForm } from "./NoteForm"

export function CreateNote(){
    return (
        <>
            <h1 className="mb-4"> New Note</h1>
            <NoteForm />
        </>
    )
}