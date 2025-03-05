import React from 'react'
import Layout from './Layout'

const About = () => {
  
  return (
    <main className="flex w-full xl:h-full flex-col items-center justify-center ">
        <Layout classname="pt-8">
          <div className="my-8 w-full">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-4 text-6xl font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium text-lg dark:text-light/90">
              Hey there! I am Mayurdhvaj, a passionate Web Developer and AI/ML enthusiast from Gondal, Gujarat. My expertise lies in Data Science, AI-ML, and Web Development, where I bridge the gap between data-driven insights and cutting-edge web technologies.
              </p>
              <p className="font-medium text-lg mt-4 dark:text-light/90">
              I love analyzing complex datasets, uncovering patterns, and building machine learning models to solve real-world challenges. With Python as my primary tool, I have worked on predictive analytics, statistical modeling, deep learning, and NLP.
              </p>
              <p className="font-medium text-lg mt-4 dark:text-light/90">
              I specialize in modern web technologies like HTML, CSS, JavaScript, Node.js, React.js, and Next.js, developing seamless, responsive, and visually engaging applications. I enjoy crafting web solutions that not only look great but also deliver a smooth user experience.
              </p>
              <p className="font-medium text-lg mt-4 dark:text-light/90">
              I’m always exploring the latest trends, whether it’s LLMs, deep learning, or emerging web frameworks.
              </p>
              <p className="font-medium text-lg my-4 dark:text-light/90">
              When I’m not coding, you’ll find me playing chess, watching movies or animes and playing video games. Let’s connect, collaborate, and innovate! 🚀
              </p>
            </div>
            
          </div>
        </Layout>
      </main>
  )
}

export default About