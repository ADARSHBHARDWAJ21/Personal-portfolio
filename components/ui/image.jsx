/**
 * Image component to replace Next.js Image
 * Provides similar API but uses regular img tag
 */
export function Image({ src, alt, width, height, fill, className, priority, style, ...props }) {
  const imageStyle = fill 
    ? { width: '100%', height: '100%', objectFit: 'cover', ...style }
    : width && height 
      ? { width, height, ...style }
      : style || {};

  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={imageStyle}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}

