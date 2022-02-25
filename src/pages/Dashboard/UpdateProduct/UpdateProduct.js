import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {

    }

    return (
        <div>
            
            <div style={{backgroundColor:'white'}}  className='d-flex justify-content-between my-5'>
                <div className='text-start ms-2 d-flex'>
                    <h1>
                        <i style={{color:'#002447', fontSize:'70px'}} className="fas fa-address-card"> </i>
                    </h1>
                   <div className='ms-3 p-1'>
                   <h5 className='fw-bold'>SUITE</h5>
                    <small className=''> Update Products</small>
                   </div>
                </div>
                <div>

                    <p className=' fw-bold border p-1'>PRODUCTS/SUITE</p>
                </div>

            </div>
            <div className='text-end m-3'>
                <Link to="/manageProducts">
                    <button style={{ backgroundColor: '#002447' }} className='  text-light btn fw-bold py-2'>  <i  className="fas fa-address-card"> </i> Update Product</button>
                </Link>
            </div>
            <div style={{ marginTop: '60px', backgroundColor:'white' }} className='container '>

                <div className='row shadow border pb-4 mb-3'>
                    <h5 className='text-start p-3 border'>Please Update  <span style={{ color: 'rgb(45, 55, 72)' }}> Product</span> </h5>

                    <div className='col-12 col-lg-12 col-md-6 mt-5'>
                        <div className='text-start'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 col-md-6'>
                                        <span className='fw-bold'>Product Name *</span>

                                        <input style={{ width: '60%' }} className='field mb-3 ms-2 ' {...register("title", { required: true })} placeholder='Product Title ' /> <br />
                                        {/* error */}
                                       
                                        <div className='  mt-5'>
                                            <div className='d-flex'>
                                                <span className='fw-bold'>Product Unit *</span>
                                                <input style={{ width: '60%' }} className='field mb-3 ms-4  ' type="text" {...register("unit", { required: true })} placeholder=' Unit Name' /> <br />
                                               
                                            </div>
                                            <span className='fw-bold'>Category *</span>
                                            {/* category */}
                                            <select style={{ width: '60%' }} className='field p-1 ms-5 mt-2 ' {...register("category")}>
                                                <option value="">Select category...</option>
                                                <option value="Camping">Cosmetics</option>
                                                <option value="Cities">Cities</option>
                                                <option value="Trips">Trips</option>
                                                <option value="Vacation">Vacation</option>
                                                <option value="Holiday">Holiday</option>
                                                <option value="Advanture">Advanture</option>
                                            </select>
                                            <div className='mt-4'>
                                                <span className='fw-bold'>Price *</span>
                                                <input style={{ width: '60%', marginLeft: '14%' }} className='field mb-3   ' type="number" {...register("price", { required: true })} placeholder='Product Price' /> <br />

                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 col-md-6'>

                                        <div className='mt-5'>


                                            <div >
                                                <h6>Description *</h6>

                                                <textarea style={{ width: '80%' }} className='field   p-3' type="text" {...register("desc", { required: true })} placeholder=' Product description' /> <br />
                                               

                                                <h6>Image *</h6>

                                                <input style={{ width: '80%', border: '1px solid ' }} className='field   ms-1 ' type="file" {...register("img", { required: true })} placeholder='Choose Image' /> <br />
                                              
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* error */}



                                <input style={{ backgroundColor: '#002447' }} className=' text-light btn fw-bold  px-5 py-2' type="submit" />

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

};

export default UpdateProduct;