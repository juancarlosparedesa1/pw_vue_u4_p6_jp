//declaramos todas las rutas de mi proyecto
import { createRouter, createWebHashHistory } from 'vue-router'

//importar todas las paginas que he creado,no los componentes
import EstudiantesPage from '../pages/EstudiantesPage.vue'
import EstudiantesPage2 from '../pages/EstudiantesPage2.vue'
import EstudiantesPage3 from '../pages/EstudiantesPage3.vue'
import BienvenidoPage from '../pages/BienvenidoPage.vue'


const routes = [
    {
        path:'/estudiante',//este path
        component:EstudiantesPage 
    },
    {
        path:'/inicio',
        component:EstudiantesPage2
    },
    {
        path:'/final',
        component:EstudiantesPage3
    },
    {
        path:'/',//index solo tiene el slash
        component:BienvenidoPage
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
//declaramos las rutas
