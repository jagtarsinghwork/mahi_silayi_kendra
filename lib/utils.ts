import { axiosInstance as axios } from '@/api';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function convertToFile(url: string) {
  try {
    const res = await fetch(`/file${url}`);
    const blob = await res.blob();
    const fileName = url?.split('/').pop() as string;
    const file = new File([blob], fileName);
    return file;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Error occurred while fetching file');
  }
}

export function defaultProfile(name: string) {
  const firstName = name?.split(' ')[0];
  const lastName = name?.split(' ')[1];
  return `${firstName?.split('')[0]} ${lastName?.split('')[0] ?? ''}`;
}

export function identifyFileCategory(file: File) {
  const result = {
    category: 'unknown',
    mimeType: file.type || 'unknown',
    extension: `${file?.name?.split('.')?.pop()?.toLowerCase()}`,
  };

  const imageTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/bmp',
    'image/svg+xml',
  ];
  const videoTypes = [
    'video/mp4',
    'video/webm',
    'video/ogg',
    'video/quicktime',
  ];
  const docExtensions = [
    'pdf',
    'doc',
    'docx',
    'xls',
    'xlsx',
    'ppt',
    'pptx',
    'txt',
    'rtf',
  ];

  if (imageTypes.includes(result.mimeType)) {
    result.category = 'image';
  } else if (videoTypes.includes(result.mimeType)) {
    result.category = 'video';
  } else if (docExtensions.includes(result.extension)) {
    result.category = 'document';
  }

  return result;
}
