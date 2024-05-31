package com.example.TrabajoPractico8.controllers;

import com.example.TrabajoPractico8.entities.Pedido;
import com.example.TrabajoPractico8.entities.PreferenceMP;
import com.example.TrabajoPractico8.services.MercadoPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mercado_pago")
public class MercadoPagoController {

    @Autowired
    private MercadoPagoService mercadoPagoService;

    @PostMapping("/create_preference")
    public PreferenceMP createPreference(@RequestBody Pedido pedido) {
        return mercadoPagoService.createPreference(pedido);
    }
}