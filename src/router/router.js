//declaramos todas las rutas de mi proyecto
import { createRouter, createWebHashHistory } from 'vue-router'

//importar todas las paginas que he creado,no los componentes
import EstudiantesPage from '../pages/EstudiantesPage.vue'
import EstudiantesPage2 from '../pages/EstudiantesPage2.vue'
import EstudiantesPage3 from '../pages/EstudiantesPage3.vue'
import BienvenidoPage from '../pages/BienvenidoPage.vue'
import NoFoundPage from '../pages/NoFoundPage.vue'
import BloqueadoPage from '../pages/BloqueadoPage.vue'


const routes = [
    {
        path:'/estudiante/:cedula',//este path
        name:"pureba",
        component:EstudiantesPage 
    },
    {
        path:'/inicio/vacio',
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
    {
        path:'/:pathMatch(.*)*',//wilcard......
        component:NoFoundPage
    },
    {
        path:'/bloqueado',
        name:'blo',
        component:BloqueadoPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
//declaramos guardianes
router.beforeEach((to,from,next)=>{
    
    console.log('Guardianes')
    console.log(to);
    console.log(from);
    console.log(next)
    let usuario='Juan';
    let resultado=false;//me dice que si tiene acceso a esa url
    const random=Math.random()*100;
    if(random>50){
        console.log("si tiene acceso a esa página")
        next();
    }else{
        console.log('acceso bloqueado')
        next({name:'blo'})
    }
})
