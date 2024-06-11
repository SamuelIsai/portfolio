<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "PORTFOLIO";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

// Obtener datos específicos
$nombre = $data->nombre;
$correo = $data->correo;
$mensaje = $data->mensaje;

// Preparar la consulta SQL para la inserción
$sql = "INSERT INTO mensajes (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

// Ejecutar la consulta-
if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error al guardar datos: " . $conn->error;
}


if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['msg'])) {
        $name = $_POST['nombre'];
        $email = $_POST['email'];
        $msg = $_POST['msg'];

        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To: $email" . "\r\n"; // Responder al correo del remitente
        $header .= "X-Mailer: PHP/" . phpversion();

        $subject = "Mensaje enviado desde el formulario de contacto";

        $mail = mail("mejiasamuel023@gmail.com", $subject, $msg, $header);

        if ($mail) {
            echo "<h4>¡Correo enviado exitosamente!</h4>";
        } else {
            echo "<h4>Error al enviar el correo.</h4>";
        }

        // Mensaje para la consola del navegador
        echo "<script>console.log('Correo enviado: " . ($mail ? 'Sí' : 'No') . "');</script>";
    } else {
        echo "<h4>Por favor, completa todos los campos.</h4>";
    }
}

// Cerrar la conexión
$conn->close();
?>
