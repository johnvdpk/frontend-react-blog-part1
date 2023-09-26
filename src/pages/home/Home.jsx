import './Home.css'
import { useForm } from "react-hook-form";

function Home () {

    const { register, handleSubmit, formState:{errors} } = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    console.log("ERROS",errors);


    return (
        <>
            <div className='container'>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label>Titel:</label>
                    <input
                        {...register("title", {required:true,})}

                    type='text'
                    />
                    {errors.title && <p>Dit veld is verplicht</p>}
                    <label>Ondertitel:</label>
                    <input
                        {...register("subtitle", {required: true,})}
                        type='text'
                    />
                    {errors.subtitle && <p>Dit veld is verplicht</p>}
                    <label>Auteur:</label>
                    <input
                        {...register("author", {required: true,})}
                        type='text'
                    />
                    {errors.author && <p>Dit veld is verplicht</p>}
                    <label>Post:</label>
                    <textarea
                        {...register("content",{required:true, minLength: 100, maxLength: 300,})}
                        
                    />
                    {errors.content && <p>Minimaal 100 leestekens en maximaal 300</p>}
                    <button className="sendbutton" >send</button>
                </form>
            </div>
        </>

    );
}

export default Home;