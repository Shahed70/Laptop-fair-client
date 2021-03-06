import axios from "axios";
import React, { useState } from "react";
import { Link as a } from "react-router-dom";
import "./Deshboard.css";
import ProductManage from "./ProductManage";
const Deshboard = () => {
  const [products, setProducts] = useState({
    name: "",
    price: "",
    weight: "",
    description: "",
  });

  const imgUploadHandler = (e) => {
    const imgFile = e.target.files[0];
    const imgData = new FormData();
    imgData.set("key", "5f8254e577ededae90aac2e97f10d502");
    imgData.append("image", imgFile);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        const productImg = { ...products };
        productImg.image = res.data.data.display_url;
        setProducts(productImg);
      })
      .catch((err) => console.log(err));
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://strawberry-cobbler-77507.herokuapp.com/addProduct", products)
      .then((res) => {
        if(res.status === 200){
          alert('Product upload successful! please refresh the page')
        }
      })
      .catch((err) => console.log(err));
  };
  //console.log(product);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-12 admin-nav pt-5">
            <ul className="nav flex-column fixed pt-1">
              <li className="nav-item">
                <a className=" text-light btn btn-normal" href="#mangeproduct">
                  Manage Product
                </a>
              </li>
              <li className="nav-item">
                <a className=" text-light btn btn-normal" href="#addproduct">
                  Add Product
                </a>
              </li>
              <li className="nav-item">
                <a className="text-light btn btn-normal" to="#">
                  Edit Product
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-10 col-sm-12 px-0 admin-board pt-5">
            <div id="mangeproduct">
              <ProductManage />
            </div>
             <div id="addproduct" className="mt-5">
             <h1 className="display-4 mb-5">Mange Product</h1>
             <form onSubmit={addProductHandler}>
              <div className="d-flex">
                <div className="d-flex flex-column w-100">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onBlur={(e) =>
                        setProducts({
                          ...products,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Price</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      onBlur={(e) =>
                        setProducts({
                          ...products,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Weight</label>
                    <input
                      type="text"
                      className="form-control"
                      name="weight"
                      onBlur={(e) =>
                        setProducts({
                          ...products,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>

                <div className="d-flex flex-column w-100 ml-4">
                  <div className="form-group">
                    <label>Product Descriptin</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      onBlur={(e) =>
                        setProducts({
                          ...products,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={imgUploadHandler}
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
             </div>
           

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Deshboard;
