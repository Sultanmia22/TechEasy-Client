import { Upload } from 'lucide-react';
import React, { useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';

type ProductInpu = {
  image: File | null;
}

interface fileUploadProps {
  register: UseFormRegister<ProductInpu>
}

const FileUpload = ({ register }: fileUploadProps) => {
  const [fileName, setFileName] = useState(null);

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2">
        Product Image
      </label>

      {/* Input Field */}
      <input

        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*"
        {...register('image', {
          onChange: (e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFileName(file.name);
            }
          },
          required: true
        })}
      />

      {/* Design Area */}
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-base-300 rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        {!fileName ? (
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Upload size={20} className="text-primary" />
            </div>
            <p className="text-sm text-base-content font-medium">Click to upload</p>
            <p className="text-[11px] text-neutral mt-1">PNG, JPG up to 5MB</p>
          </div>
        ) : (
          <div className="text-center px-4">
            <p className="text-sm font-semibold text-primary truncate max-w-50">
              {fileName}
            </p>
            <p className="text-[11px] text-neutral mt-1">Click to change file</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUpload;