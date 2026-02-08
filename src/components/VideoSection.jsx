import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, Maximize2, Minimize2 } from 'lucide-react';
import videoFile from '../assets/v1.mp4';
import videoThumbnail from '../assets/video-thumbnail.png';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            } else if (containerRef.current.webkitRequestFullscreen) {
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) {
                containerRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    const closeVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
        if (isFullscreen) {
            toggleFullscreen();
        }
    };

    // Handle fullscreen change events
    React.useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(
                !!(document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.msFullscreenElement)
            );
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <section className="py-24 bg-app-main transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-bold text-sm uppercase tracking-[0.2em]"
                    >
                        Our Story
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold mt-4 text-app-main"
                    >
                        Watch Our Story in Action
                    </motion.h2>
                </div>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`relative overflow-hidden shadow-2xl ${isFullscreen ? 'bg-black w-full h-full rounded-none' : 'rounded-[50px]'
                        }`}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(isPlaying ? false : true)}
                >
                    {/* Video Element */}
                    <video
                        ref={videoRef}
                        className={`w-full object-cover ${isFullscreen ? 'h-full' : 'h-auto max-h-[600px]'}`}
                        poster={videoThumbnail}
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                    >
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay (when not playing) */}
                    <AnimatePresence>
                        {!isPlaying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer"
                                onClick={togglePlay}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white shadow-2xl"
                                >
                                    <Play size={40} className="fill-current ml-2" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Video Controls (when playing or hovering) */}
                    <AnimatePresence>
                        {showControls && isPlaying && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={togglePlay}
                                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                                    >
                                        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                                    </button>

                                    <div className="flex items-center gap-3">
                                        {/* Fullscreen Toggle */}
                                        <button
                                            onClick={toggleFullscreen}
                                            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                                        >
                                            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                                        </button>

                                        {/* Close Button */}
                                        <button
                                            onClick={closeVideo}
                                            className="w-12 h-12 bg-red-600/80 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Gradient Overlay for better text visibility */}
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    )}
                </motion.div>

                {/* Description below video */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-app-muted text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
                >
                    Discover how we're transforming the energy landscape through innovation, sustainability, and excellence.
                    Watch our journey as we power communities and businesses with reliable, clean energy solutions.
                </motion.p>
            </div>
        </section>
    );
};

export default VideoSection;
