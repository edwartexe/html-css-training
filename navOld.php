<nav class="palleteRed" style="margin:0; padding:0;">
	<div style="background:url('fondos/banner.PNG');    background-size: cover; height:120px;">
		<div>
			<a href="mainMenu.php"><h1 class="navTitle">Feria de Posgrados</h1></a>
			<div class="navTitledot"></div>
		</div>
	</div>
	<?php if($showNav){?>
	<div style="background:#BFCBCE; border-radius:0 0 100px 0; width:220px; height:60px; position:absolute; z-index:2;">
		<?php if($gen2){?>
		<div style="float:left; height:100%;" class="dropdown">
			<button class="dropdown-toggle hoverstyle" style="height:100%; border:0; padding:10px; font-size:large;" type="button" data-toggle="dropdown">
				<b style="font-size:x-large;">&#9776;</b> Menú
			</button>
			<ul class="dropdown-menu">
				<!-- &#x2302; -->
				<li><a href="mainMenu.php">&#x1F3E0; Home</a></li>
				<li><a href="Programas.php">Programas Académicos</a></li>
				<li><a href="Admisiones.php">Inscripciones y Admisiones</a></li>
				<li><a href="Financiamiento.php">Financiamiento</a></li>
				<li><a href="Intercambios.php">Intercambio Académico</a></li>
				<li><a href="Charlas.php">Charlas en Líneas</a></li>
				<li><a href="OtrosServicios.php">Multimedia y otros</a></li>
				<li><a href="https://www.uninorte.edu.co/web/apoyo-financiero/doctorados-becas" target="_blank">Becas Bicentenario para <br/>Doctorados</a></li>
				<li><a href="Revive.php">Cómo se vivió la Feria <br/> presencial de Posgrados</a></li>
			</ul>
		</div>
		<div style="float:left; height:40px; width:2px; background:#323E44; margin: 10px;"></div>
		<?php } ?>
		<a href="<?php echo $returnAdress;?>" class="hoverstyle" style="float:left; height:100%; border:0; padding:10px; background: none;">
			<!--b style="font-size:x-large;">&#x2B8C;</b-->
			<?php if($isMainmenu){ ?>
				<p style="font-size: x-large;">Cerrar Sesión</p>
			<?php }else{?>
				<img src="return.png" style="height:80%;"/>
			<?php }?>
		</a>
		<div style="clear:both; height:0; margin:0;"></div>
	</div>
	<?php } ?>
	
</nav>

<style>
.dropdown-menu {
    width: 300px;
	font-size: 22px;
}
.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {
    text-decoration: none;
	background: #D41F26;
	color: #fff;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    white-space: nowrap;
	background:#222222;
	color:#FCF7F7;
	border-top: 1px solid #fff;
}
.hoverstyle{
	background:#BFCBCE; 
	color:#323E44;
}
.hoverstyle:hover, .hoverstyle:focus{
	background: #A8252B;
	color:#fff;
	text-decoration: none;
}
@media (min-width: 760px) {
	.dropdown-menu {
    width: 450px;
	font-size: 32px;
	}
}
</style>