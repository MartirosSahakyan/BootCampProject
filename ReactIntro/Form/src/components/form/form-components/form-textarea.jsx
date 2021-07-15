export function FormTextarea({placeholder,handleTextarea, label}) {
    return(
        <label>
              {label}
              <textarea
                className="form-fields"
                placeholder={placeholder}
                onChange={handleTextarea}
              ></textarea>
            </label>
    )
}