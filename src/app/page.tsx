export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramya Gopinathan - Portrait Artist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #f8f4f0 0%, #faf7f4 100%);
            color: #5a4a42;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            text-align: center;
            padding: 60px 0;
            background: linear-gradient(135deg, #e8d5c7 0%, #f2e9e1 100%);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 3.5em;
            color: #8b7355;
            margin-bottom: 10px;
            font-weight: 300;
            letter-spacing: 2px;
        }

        .tagline {
            font-size: 1.3em;
            color: #a68b5b;
            font-style: italic;
        }

        nav {
            background: #f5f0eb;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        nav ul {
            list-style: none;
            display: inline-flex;
            gap: 40px;
        }

        nav a {
            text-decoration: none;
            color: #8b7355;
            font-weight: 500;
            font-size: 1.1em;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: #d4a574;
        }

        .hero {
            padding: 80px 0;
            text-align: center;
            background: linear-gradient(135deg, #faf7f4 0%, #f0e6d6 100%);
        }

        .hero h2 {
            font-size: 2.5em;
            color: #8b7355;
            margin-bottom: 20px;
            font-weight: 300;
        }

        .hero p {
            font-size: 1.2em;
            color: #a68b5b;
            max-width: 600px;
            margin: 0 auto 40px;
        }

        .gallery {
            padding: 80px 0;
        }

        .gallery h3 {
            text-align: center;
            font-size: 2.5em;
            color: #8b7355;
            margin-bottom: 50px;
            font-weight: 300;
        }

        .artwork-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .artwork-item {
            background: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .artwork-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(139, 115, 85, 0.15);
        }

        .artwork-placeholder {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, #e8d5c7 0%, #f2e9e1 50%, #d4c4b8 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8b7355;
            font-style: italic;
            font-size: 1.1em;
            margin-bottom: 15px;
        }

        .artwork-title {
            font-size: 1.3em;
            color: #8b7355;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .artwork-desc {
            color: #a68b5b;
            font-size: 0.95em;
        }

        .about {
            padding: 80px 0;
            background: linear-gradient(135deg, #f5f0eb 0%, #e8d5c7 100%);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 50px;
            align-items: center;
        }

        .about-text h3 {
            font-size: 2.5em;
            color: #8b7355;
            margin-bottom: 20px;
            font-weight: 300;
        }

        .about-text p {
            font-size: 1.1em;
            color: #a68b5b;
            margin-bottom: 20px;
        }

        .artist-photo {
            width: 100%;
            height: 350px;
            background: linear-gradient(135deg, #e8d5c7 0%, #d4c4b8 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8b7355;
            font-style: italic;
            font-size: 1.2em;
        }

        .contact {
            padding: 80px 0;
            text-align: center;
        }

        .contact h3 {
            font-size: 2.5em;
            color: #8b7355;
            margin-bottom: 30px;
            font-weight: 300;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 40px;
        }

        .contact-item {
            color: #a68b5b;
            font-size: 1.1em;
        }

        .contact-item strong {
            color: #8b7355;
            display: block;
            margin-bottom: 5px;
        }

        footer {
            background: #8b7355;
            color: white;
            text-align: center;
            padding: 40px 0;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5em;
            }
            
            nav ul {
                flex-direction: column;
                gap: 20px;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 30px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Ramya Gopinathan</h1>
            <p class="tagline">Portrait Artist & Visual Storyteller</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="hero" id="home">
        <div class="container">
            <h2>Capturing Souls Through Art</h2>
            <p>Welcome to my world of portrait paintings, where every brushstroke tells a story and every face holds a universe of emotions. I specialize in bringing out the essence of my subjects through careful attention to detail and a deep appreciation for human expression.</p>
        </div>
    </section>

    <section class="gallery" id="gallery">
        <div class="container">
            <h3>Portrait Gallery</h3>
            <div class="artwork-grid">
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Gentle Grace</div>
                    <div class="artwork-desc">Oil on canvas, capturing the serene beauty of natural light</div>
                </div>
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Morning Light</div>
                    <div class="artwork-desc">Pastel portrait emphasizing soft, warm tones</div>
                </div>
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Childhood Wonder</div>
                    <div class="artwork-desc">Acrylic on canvas, celebrating youthful innocence</div>
                </div>
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Timeless Wisdom</div>
                    <div class="artwork-desc">Charcoal and pastel, honoring life's experiences</div>
                </div>
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Dreamer's Eyes</div>
                    <div class="artwork-desc">Mixed media, exploring depth and emotion</div>
                </div>
                <div class="artwork-item">
                    <div class="artwork-placeholder">Portrait Sample Coming Soon</div>
                    <div class="artwork-title">Silent Strength</div>
                    <div class="artwork-desc">Oil portrait highlighting inner resilience</div>
                </div>
            </div>
        </div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="artist-photo">Artist Photo Coming Soon</div>
                <div class="about-text">
                    <h3>About the Artist</h3>
                    <p>Hello, I'm Ramya Gopinathan, a passionate portrait artist dedicated to capturing the unique essence of every individual I paint. My journey with art began with a simple love for faces – the way light dances across features, how expressions tell stories, and the profound beauty found in human connection.</p>
                    <p>Working primarily with soft, pastel palettes, I believe in the power of gentle colors to convey deep emotions. Each portrait is a collaboration between artist and subject, resulting in artwork that not only captures physical likeness but also reveals the soul within.</p>
                    <p>My approach combines traditional techniques with contemporary sensitivity, creating portraits that are both timeless and deeply personal. Whether working with oil, acrylic, or mixed media, I strive to create pieces that families will treasure for generations.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="container">
            <h3>Commission a Portrait</h3>
            <p>I'd love to create a custom portrait for you or your loved ones. Each piece is carefully crafted to capture not just appearance, but personality and spirit.</p>
            <div class="contact-info">
                <div class="contact-item">
                    <strong>Email</strong>
                    ramya.art@example.com
                </div>
                <div class="contact-item">
                    <strong>Phone</strong>
                    +1 (555) 123-4567
                </div>
                <div class="contact-item">
                    <strong>Studio Hours</strong>
                    By Appointment
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Ramya Gopinathan. All rights reserved. | Bringing portraits to life, one brushstroke at a time.</p>
        </div>
    </footer>
</body>
</html>` }} />
  );
}