import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nepzum FC - The Future is Purple';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #3b0764 0%, #581c87 50%, #3b0764 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                {/* Grid overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Yellow accent line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '8px',
                        background: '#facc15',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: 8,
                            letterSpacing: '-2px',
                        }}
                    >
                        THE FUTURE IS
                    </div>
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 24,
                            letterSpacing: '-3px',
                        }}
                    >
                        PURPLE.
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#facc15',
                            fontWeight: 600,
                            marginBottom: 8,
                        }}
                    >
                        NEPZUM FC
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: '#cbd5e1',
                        }}
                    >
                        Youth Football Academy | Plumstead, London
                    </div>
                </div>

                {/* Yellow accent line bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '8px',
                        background: '#facc15',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
