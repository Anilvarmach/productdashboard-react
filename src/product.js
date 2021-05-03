import { Link } from "react-router-dom";
export default function Product() {
    return <>
        <h1 class="h3 mb-2 text-gray-800">Product</h1>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                    <Link to='/productcreate' exact={true} className="btn btn-outline-primary">
                        <i class="fas fa-user-plus"></i> Create Product
                    </Link>
                </h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th><i class="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th><i class="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>$320,800</td>
                                <th><Link to='/productedit/1'>Edit</Link></th>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>$170,750</td>
                                <th><Link to='/productedit/2'>Edit</Link></th>
                            </tr>
                            <tr>
                                <td>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>$86,000</td>
                                <th><Link to='/productedit'>Edit</Link></th>
                            </tr>
                            <tr>
                                <td>Cedric Kelly</td>
                                <td>Senior Javascript Developer</td>
                                <td>$433,060</td>
                                <th><Link to='/productedit'>Edit</Link></th>
                            </tr>
                            <tr>
                                <td>Airi Satou</td>
                                <td>Accountant</td>
                                <td>$162,700</td>
                                <th><Link to='/productedit'>Edit</Link></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}