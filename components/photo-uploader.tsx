'use client';

import { useUploadThing } from '@/lib/uploadthing/client';
import { useState } from 'react';

interface PhotoUploaderProps {
  onUploadComplete: (url: string) => void;
  currentPhoto?: string | null;
  label?: string;
}

export default function PhotoUploader({ onUploadComplete, currentPhoto, label = 'Загрузить фото' }: PhotoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentPhoto || null);

  const { startUpload } = useUploadThing("barberPhoto", {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        const url = res[0].url;
        setPreview(url);
        onUploadComplete(url);
        setIsUploading(false);
        alert('✅ Фото успешно загружено!');
      }
    },
    onUploadError: (error) => {
      console.error('❌ Ошибка загрузки:', error);
      alert('❌ Ошибка загрузки фото: ' + error.message);
      setIsUploading(false);
    },
    onUploadBegin: () => {
      setIsUploading(true);
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await startUpload(Array.from(files));
    }
  };

  return (
    <div className="space-y-3">
      {preview && (
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={preview}
            alt="Превью"
            className="w-full h-full object-cover rounded-full border-2 border-primary"
          />
        </div>
      )}
      
      <div className="flex flex-col items-center gap-2">
        <label className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {isUploading ? '⏳ Загрузка...' : label}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isUploading}
            className="hidden"
          />
        </label>
        
        {isUploading && (
          <p className="text-xs text-muted-foreground">Загрузка фото...</p>
        )}
        
        {preview && (
          <button
            type="button"
            onClick={() => {
              setPreview(null);
              onUploadComplete('');
            }}
            className="text-xs text-red-500 hover:text-red-400"
          >
            Удалить фото
          </button>
        )}
      </div>
    </div>
  );
}
