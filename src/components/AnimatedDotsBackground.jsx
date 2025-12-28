import React, { useEffect, useRef } from 'react'
import './AnimatedDotsBackground.scss'

const AnimatedDotsBackground = () => {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const dotsRef = useRef([])
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dots = []
    const dotCount = 150
    const baseRadius = 2
    const spacing = 60
    const speed = 0.3

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reinitialize dots on resize
      dots.length = 0
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: baseRadius + Math.random() * 1.5,
          baseRadius: baseRadius + Math.random() * 1.5,
        })
      }
      dotsRef.current = dots
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse position tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      isHoveringRef.current = true
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      mousePosRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouseX = mousePosRef.current.x
      const mouseY = mousePosRef.current.y
      const maxDistance = 120
      const zoomIntensity = 3

      // Get theme-aware colors once per frame
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const primaryR = isDark ? 129 : 99
      const primaryG = isDark ? 140 : 102
      const primaryB = isDark ? 248 : 241
      const secondaryR = isDark ? 167 : 139
      const secondaryG = isDark ? 139 : 92
      const secondaryB = isDark ? 250 : 246

      // Update and draw dots
      dots.forEach((dot, index) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Wrap around edges
        if (dot.x < -50) dot.x = canvas.width + 50
        if (dot.x > canvas.width + 50) dot.x = -50
        if (dot.y < -50) dot.y = canvas.height + 50
        if (dot.y > canvas.height + 50) dot.y = -50

        // Calculate distance from mouse
        const dx = dot.x - mouseX
        const dy = dot.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Zoom effect on hover
        let scale = 1
        let opacity = 0.3
        let colorIntensity = 0.3

        if (distance < maxDistance && isHoveringRef.current) {
          const proximity = 1 - distance / maxDistance
          scale = 1 + proximity * zoomIntensity
          opacity = 0.3 + proximity * 0.7
          colorIntensity = 0.3 + proximity * 0.7
        }

        const currentRadius = dot.baseRadius * scale

        // Draw dot with gradient
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, currentRadius
        )
        
        if (distance < maxDistance && isHoveringRef.current) {
          gradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`)
          gradient.addColorStop(0.5, `rgba(${secondaryR}, ${secondaryG}, ${secondaryB}, ${opacity * 0.8})`)
          gradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`)
        } else {
          gradient.addColorStop(0, `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${opacity})`)
          gradient.addColorStop(1, `rgba(${primaryR}, ${primaryG}, ${primaryB}, 0)`)
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw connections to nearby dots
        dots.slice(index + 1).forEach((otherDot) => {
          const dx2 = dot.x - otherDot.x
          const dy2 = dot.y - otherDot.y
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (distance2 < spacing) {
            // Check if either dot is near mouse
            const dotNearMouse = distance < maxDistance
            const otherNearMouse = Math.sqrt(
              Math.pow(otherDot.x - mouseX, 2) + Math.pow(otherDot.y - mouseY, 2)
            ) < maxDistance

            let lineOpacity = (1 - distance2 / spacing) * 0.15
            
            if (dotNearMouse || otherNearMouse) {
              lineOpacity = (1 - distance2 / spacing) * 0.3
            }

            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(${primaryR}, ${primaryG}, ${primaryB}, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="animated-dots-background"
      aria-hidden="true"
    />
  )
}

export default AnimatedDotsBackground
