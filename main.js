// Import Libraries
import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { TetrahedronGeometry } from 'three'

// Import Textures
import sunTexture from '../textures/sun-texture.jpg'
import mercuryTexture from '../textures/mercury-texture.jpg'
import venusTexture from '../textures/venus-texture.jpg'
import earthTexture from '../textures/earth-texture.jpg'
import moonTexture from '../textures/moon-texture.jpg'
import marsTexture from '../textures/mars-texture.jpg'
import jupiterTexture from '../textures/jupiter-texture.jpg'
import saturnTexture from '../textures/saturn-texture.jpg'
import saturnRingTexture from '../textures/saturn-ring-texture.png'
import uranusTexture from '../textures/uranus-texture.jpg'
import neptuneTexture from '../textures/neptune-texture.jpg'
import plutoTexture from '../textures/pluto-texture.jpg'

// Global

// Create a texture loader 
const textureLoader = new THREE.TextureLoader()

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 10000)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#app')})

// Renderer Pixel Ratio
renderer.setPixelRatio(window.devicePixelRatio)

// Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight)

// Camera position
// Along the Z-axis
camera.position.setZ(1000)
camera.position.setY(90)

// Render the scene
renderer.render(scene, camera)

// Create an object
const ringGeometry = new THREE.TorusGeometry(10, 5, 10, 100)

// Material for the ring
const ringMaterial = new THREE.MeshStandardMaterial({color: 0xFF6347})

// Create A Mesh
const ring = new THREE.Mesh(ringGeometry, ringMaterial)

// Add the mesh to the scene
scene.add()

// Add Light Source

const pointLight = new THREE.PointLight(0xffffff,1,0,2)
pointLight.position.set(0,0,0)

const ambientLight = new THREE.AmbientLight(0xffffff)

// Grid Helper
const gridHelper = new THREE.GridHelper(2000,500)

// Add light source to the scene
scene.add(pointLight)

// Orbit Controls
const controls = new OrbitControls(camera , renderer.domElement)

// Stars
function addStars(){
  // Define the shape you want to generate each time
  const starGeometry = new THREE.SphereGeometry(0.01)
  
  // Standard material
  const material = new THREE.MeshBasicMaterial({color: 0xffffff})

  // Create the star object
  const star = new THREE.Mesh(starGeometry, material)

  // Randomly generate star co-ordinates
  const [x,y,z] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(100))

  // Assign randomly generated co-ordinates
  star.position.set(x, y, z)

  // Add the star
  scene.add(star)

}

Array(300).fill().forEach(addStars)

// Background
const spacetexture = new THREE.TextureLoader().load('./textures/milky-way-texture.jpg')

scene.background = spacetexture

// End of the Background

// Create The Solar System

// Create The Sun

// Define the Geometry of the sun
const sunGeometry = new THREE.SphereGeometry(100,30,30)

// Define the material of the sun
const sunMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture)
})

// Join the material and the geometry into a mesh
const sun = new THREE.Mesh(sunGeometry,sunMaterial)

// Add the sun to the scene
scene.add(sun)

// Create the planets

// Mercury
// *Venus
// Earth
// Mars
// Asteroid belt
// Jupiter
// Saturn
// *Uranus
// Neptune
// Pluto

// *Venus and Uranus are the only planets that spin clockwise

// Create Mercury

// Create an object for mercury to revolve around
const mercuryObject = new THREE.Object3D()

// Define the Geometry Mercury
const mercuryGeometry = new THREE.SphereGeometry(20,30,30)

// Define the material of Mercury
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(mercuryTexture)
})

// Join the material and the geometry into a mesh
const mercury = new THREE.Mesh(mercuryGeometry,mercuryMaterial)

// Add Mercury to the Mercury Object
mercuryObject.add(mercury)

// Add the Mercury Object to the scene
scene.add(mercuryObject)

// Position Mercury
mercury.position.setZ(200)

// Create Venus

// Create an object for Venus to revolve around
const venusObject = new THREE.Object3D()

// Define the Geometry Venus
const venusGeometry = new THREE.SphereGeometry(20,30,30)

// Define the material of Venus
const venusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(venusTexture)
})

// Join the material and the geometry into a mesh
const venus = new THREE.Mesh(venusGeometry,venusMaterial)

// Add Venus to the Venus Object
venusObject.add(venus)

// Add the Venus Object to the scene
scene.add(venusObject)

// Position Venus
venus.position.setZ(400)

// Create Earth

// Create an object for Earth to revolve around
const earthObject = new THREE.Object3D()

// Define the Geometry Earth
const earthGeometry = new THREE.SphereGeometry(20,30,30)

// Define the material of Earth
const earthMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(earthTexture)
})

// Join the material and the geometry into a mesh
const earth = new THREE.Mesh(earthGeometry,earthMaterial)

// Add Earth to the Venus Object
earthObject.add(earth)

// Add the Earth Object to the scene
scene.add(earthObject)

// Position The Earth
earth.position.setZ(600)

// Create The Earth's Moon

// Set the moon to revolve around the moon object
const moonObject = new THREE.Object3D()

// Define the Geometry Earth
const moonGeometry = new THREE.SphereGeometry(9,30,30)

// Define the material of Earth
const moonMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(moonTexture)
})

// Join the material and the geometry into a mesh
const moon = new THREE.Mesh(moonGeometry,moonMaterial)

// Add moon to the moon Object
moonObject.add(moon)

// Add the moon object to the earth object
earthObject.add(moonObject)

// Position The Moon
moon.position.setX(40)
moonObject.position.setZ(600)

// Create Mars

// Create an object for Mars to revolve around
const marsObject = new THREE.Object3D()

// Define the Geometry Mars
const marsGeometry = new THREE.SphereGeometry(20,30,30)

// Define the material of Mars
const marsMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(marsTexture)
})

// Join the material and the geometry into a mesh
const mars = new THREE.Mesh(marsGeometry,marsMaterial)

// Add Mars to the Mars Object
marsObject.add(mars)

// Add the Mars Object to the scene
scene.add(marsObject)

// Position Mars
mars.position.setZ(800)

// Create Jupiter

// Create an object for Jupiter to revolve around
const jupiterObject = new THREE.Object3D()

// Define the Geometry Jupiter
const jupiterGeometry = new THREE.SphereGeometry(40,30,30)

// Define the material of Jupiter
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(jupiterTexture)
})

// Join the material and the geometry into a mesh
const jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial)

// Add Jupiter to the Jupiter Object
jupiterObject.add(jupiter)

// Add the Jupiter Object to the scene
scene.add(jupiterObject)

// Position Jupiter
jupiter.position.setZ(1000)

// Create Saturn

// Create an object for Saturn to revolve around
const saturnObject = new THREE.Object3D()

// Define the Geometry Saturn
const saturnGeometry = new THREE.SphereGeometry(40,30,30)

// Define the material of Saturn
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(saturnTexture)
})

// Join the material and the geometry into a mesh
const saturn = new THREE.Mesh(saturnGeometry,saturnMaterial)

// Add Saturn to the Saturn Object
saturnObject.add(saturn)

// Add the Saturn Object to the scene
scene.add(saturnObject)

// Position Saturn
saturn.position.setZ(1500)

// Create Uranus

// Create an object for Uranus to revolve around
const uranusObject = new THREE.Object3D()

// Define the Geometry Uranus
const uranusGeometry = new THREE.SphereGeometry(30,30,30)

// Define the material of Uranus
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(uranusTexture)
})

// Join the material and the geometry into a mesh
const uranus = new THREE.Mesh(uranusGeometry,uranusMaterial)

// Add Uranus to the Uranus Object
uranusObject.add(uranus)

// Add the Uranus Object to the scene
scene.add(uranusObject)

// Position Uranus
uranus.position.setZ(2000)

// Create Neptune

// Create an object for Neptune to revolve around
const neptuneObject = new THREE.Object3D()

// Define the Geometry Neptune
const neptuneGeometry = new THREE.SphereGeometry(30,30,30)

// Define the material of Neptune
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(neptuneTexture)
})

// Join the material and the geometry into a mesh
const neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial)

// Add Neptune to the Neptune Object
neptuneObject.add(neptune)

// Add the Neptune Object to the scene
scene.add(neptuneObject)

// Position Neptune
neptune.position.setZ(2600)

// Create Pluto

// Create an object for Pluto to revolve around
const plutoObject = new THREE.Object3D()

// Define the Geometry Pluto
const plutoGeometry = new THREE.SphereGeometry(10,30,30)

// Define the material of Pluto
const plutoMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(plutoTexture)
})

// Join the material and the geometry into a mesh
const pluto = new THREE.Mesh(plutoGeometry,plutoMaterial)

// Add Pluto to the Pluto Object
plutoObject.add(pluto)

// Add the Pluto Object to the scene
scene.add(plutoObject)

// Position Pluto
pluto.position.setZ(3000)

function movecamera(){

  const currentposition = document.body.getBoundingClientRect().top

  camera.position.x = currentposition * -0.1
  camera.position.y = currentposition * -0.1
  camera.position.z = currentposition * -0.1
}

document.body.onscroll = movecamera

// Recursive render loop
function animate(){
  // Render whenever the screen refreshes
  requestAnimationFrame(animate)

  // Rotate the Sun along the y-axis
  sun.rotation.y += 0.001;

  // Rotate mercury around the sun
  mercuryObject.rotateY(-0.001)

  // Rotate mercury around its axis
  mercury.rotateY(0.01)

  // Rotate mercury around the sun
  venusObject.rotateY(0.001)

  // Rotate mercury around its axis
  venus.rotateY(0.01)

  // Rotate Earth around the sun
  earthObject.rotateY(-0.001)

  // Rotate mercury around its axis
  earth.rotateY(0.01)

  // Rotate the moon object
  moonObject.rotateY(-0.003)

  // Rotate the moon
  moon.rotateY(0.003)

  // Rotate the mars object
  marsObject.rotateY(-0.0007)

  // Rotate the mars
  mars.rotateY(0.03)

  // Rotate the mars object
  jupiterObject.rotateY(-0.0003)

  // Rotate Jupiter around its axis
  jupiter.rotateY(0.002)

  // Rotate the mars object
  saturnObject.rotateY(-0.0001)

  // Rotate Jupiter around its axis
  saturn.rotateY(0.002)

  // Rotate the mars object
  uranusObject.rotateY(-0.0005)

  // Rotate Jupiter around its axis
  uranus.rotateY(0.002)

  // Rotate the mars object
  neptuneObject.rotateY(-0.0002)

  // Rotate Jupiter around its axis
  neptune.rotateY(0.002)

  // Rotate the mars object
  plutoObject.rotateY(-0.0003)

  // Rotate Jupiter around its axis
  pluto.rotateY(0.002)
 
  // Update controls
  controls.update

  // Recursively Render
  renderer.render(scene, camera)
}

animate()