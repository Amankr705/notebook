import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptatem natus repudiandae ipsa consequuntur eum sunt voluptatibus rem. Officiis et illo, doloribus nulla hic voluptatum voluptatibus laboriosam consectetur veniam dicta.</p>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem