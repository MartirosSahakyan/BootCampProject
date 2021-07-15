export function FormInput({handleInput, type, placeholder, label}) {
    return(
        <label>
              {label}
              <input
                className="form-fields"
                type={type}
                placeholder={placeholder}
                onChange={handleInput}
              />
            </label>
    )
}