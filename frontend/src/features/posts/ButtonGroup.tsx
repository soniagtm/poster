import { destroyPostAsync } from './postSlice'

function ButtonGroup(props: any) {

    function handleClick(e: any) {
        const payload = {
            post: {
                post_id: props.post_id
            }
        }
        props.dispatch(destroyPostAsync(payload));
    }

    return <div className='btn-group float-end'>
        <div className="btn btn-warning" onClick={() => props.toggleEditForm()}>
            Edit
        </div>
        <div className="btn btn-danger" onClick={(e) => handleClick(e)}>
            Delete
        </div>
    </div>
}

export default ButtonGroup;