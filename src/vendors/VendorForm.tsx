import { Link } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IVendor } from "./IVendor";

function VendorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVendor>({
    defaultValues: {
      code: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: null,
      phone: "",
      email: "",
    },
  });
  const save: SubmitHandler<IVendor> = (vendor) => {
    console.log(vendor);
  };
  console.log(errors);

  return (
    <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)}>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-25">
          <label htmlFor="code" className="form-label">
            Vendor Code
          </label>
          <input
            id="code"
            {...register("code", {
              required: "Vendor code is required",
              maxLength: {
                value: 6,
                message: "Exceeded maximum length",
              },
            })}
            type="text"
            className={`form-control ${errors?.code && "is-invalid"} `}
            placeholder="Enter short vendor code"
          />
          <div className="invalid-feedback">{errors?.code?.message}</div>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="name" className="form-label">
            Vendor Name
          </label>
          <input
            id="name"
            {...register("name")}
            type="text"
            className="form-control"
            placeholder="Enter vendor name"
          />
        </div>
      </div>
      <div className="row-2 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-100">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            type="text"
            className="form-control"
            placeholder="Enter vendor's address"
          />
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            id="city"
            {...register("city")}
            type="text"
            className="form-control"
            placeholder="Enter city"
          />
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select id="state" {...register("state")} className="form-select">
            <option value>Select state...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            id="zip"
            {...register("zip")}
            type="text"
            className="form-control"
            placeholder="Enter zip code"
          />
        </div>
      </div>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            type="text"
            className="form-control"
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            className="form-control"
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div className="row-3 d-flex flex-row justify-content-end w-100 gap-4">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/vendors"} className="btn btn-outline-primary me-2">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save vendor
          </button>
        </div>
      </div>
    </form>
  );
}

export default VendorForm;
