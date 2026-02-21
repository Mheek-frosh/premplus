import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, Maximize2, Minimize2 } from 'lucide-react';
import videoFile from '../assets/v1.mp4';
import videoThumbnail from '../assets/video-thumbnail.png';

const formatTime = (seconds) => {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const progressBarRef = useRef(null);

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
            setCurrentTime(0);
        }
        if (isFullscreen) {
            toggleFullscreen();
        }
    };

    const seekTo = useCallback((clientX) => {
        const bar = progressBarRef.current;
        const video = videoRef.current;
        if (!bar || !video || !video.duration) return;
        const rect = bar.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const newTime = percent * video.duration;
        video.currentTime = newTime;
        setCurrentTime(newTime);
    }, []);

    const handleProgressClick = (e) => {
        seekTo(e.clientX);
    };

    const handleProgressMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        seekTo(e.clientX);
    };

    const handleProgressTouchStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
        seekTo(e.touches[0].clientX);
    };

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) seekTo(e.clientX);
        };
        const handleMouseUp = () => setIsDragging(false);
        const handleTouchMove = (e) => {
            if (isDragging && e.touches.length > 0) {
                e.preventDefault();
                seekTo(e.touches[0].clientX);
            }
        };
        const handleTouchEnd = () => setIsDragging(false);
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, seekTo]);

    // Pause video when user scrolls past it
    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

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
                        onTimeUpdate={() => !isDragging && videoRef.current && setCurrentTime(videoRef.current.currentTime)}
                        onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
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
                                    <Play size={40} className="fill-current ml-1" />
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
                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div
                                        ref={progressBarRef}
                                        className="h-1.5 bg-brand-green/30 rounded-full cursor-pointer group hover:h-2 transition-all overflow-visible"
                                        onClick={handleProgressClick}
                                        onMouseDown={handleProgressMouseDown}
                                        onTouchStart={handleProgressTouchStart}
                                    >
                                        <div
                                            className="h-full bg-brand-green rounded-full transition-all duration-75 pointer-events-none relative"
                                            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                                        >
                                            <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-opacity ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}`} />
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-1.5 text-xs text-white/80">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between gap-4">
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

                                    {/* Play/Pause Button - Centered */}
                                    <button
                                        onClick={togglePlay}
                                        className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-brand-green backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-green/90 transition-all shadow-lg"
                                    >
                                        {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
                                    </button>

                                    <div className="w-[120px]" />
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
                </motion.p>
            </div>
        </section>
    );
};

export default VideoSection;
