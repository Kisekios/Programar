namespace escuela{
    class Escuela{
        public string nombre;
        public string direccion;
        public int añoFundacion;
        public string ceo;
        public void Timbrar(){
            Console.Beep(424,3000);
        }
    }

    class Program{
        static void Main (string[] args){
            var miEscuela = new Escuela();
            miEscuela.nombre = "Deko Academy";
            miEscuela.direccion = "Centro";
            miEscuela.añoFundacion = 2020;
            Console.WriteLine("Timbre");
            miEscuela.Timbrar();
        }
    }
}


